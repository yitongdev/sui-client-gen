import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { VecMap } from "../../vec-map/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDisplay(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::display::Display` + "<");
}

export interface DisplayFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  fields: ToField<VecMap<String, String>>;
  version: ToField<"u16">;
}

export type DisplayReified<T extends PhantomTypeArgument> = Reified<Display<T>, DisplayFields<T>>;

/**
 * Move struct: `Display`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class Display<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::display::Display`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Display.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::display::Display<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = Display.$isPhantom;

  readonly id: ToField<UID>;
  readonly fields: ToField<VecMap<String, String>>;
  readonly version: ToField<"u16">;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: DisplayFields<T>) {
    this.$fullTypeName = composeSuiType(
      Display.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::display::Display<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.fields = fields.fields;
    this.version = fields.version;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): DisplayReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: Display.$typeName,
      fullTypeName: composeSuiType(
        Display.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::display::Display<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: Display.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Display.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Display.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Display.fromBcs(T, data),
      bcs: Display.bcs,
      fromJSONField: (field: any) => Display.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Display.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => Display.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => Display.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => Display.fetch(client, T, id),
      new: (fields: DisplayFields<ToPhantomTypeArgument<T>>) => {
        return new Display([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Display.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<Display<ToPhantomTypeArgument<T>>>> {
    return phantom(Display.reified(T));
  }
  static get p() {
    return Display.phantom;
  }

  static get bcs() {
    return bcs.struct("Display", {
      id: UID.bcs,
      fields: VecMap.bcs(String.bcs, String.bcs),
      version: bcs.u16(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Display<ToPhantomTypeArgument<T>> {
    return Display.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      fields: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.fields),
      version: decodeFromFields("u16", fields.version),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Display<ToPhantomTypeArgument<T>> {
    if (!isDisplay(item.type)) {
      throw new Error("not a Display type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Display.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      fields: decodeFromFieldsWithTypes(
        VecMap.reified(String.reified(), String.reified()),
        item.fields.fields,
      ),
      version: decodeFromFieldsWithTypes("u16", item.fields.version),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): Display<ToPhantomTypeArgument<T>> {
    return Display.fromFields(typeArg, Display.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      fields: this.fields.toJSONField(),
      version: this.version,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): Display<ToPhantomTypeArgument<T>> {
    return Display.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      fields: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.fields),
      version: decodeFromJSONField("u16", field.version),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): Display<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== Display.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Display.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Display.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): Display<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDisplay(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Display object`);
    }
    return Display.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): Display<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDisplay(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Display object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Display.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Display.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Display<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Display object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDisplay(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Display object`);
    }

    return Display.fromSuiObjectData(typeArg, res.data);
  }
}
