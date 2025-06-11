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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { String } from "../../../0x1/string/structs/index.js";
import { PKG_V35 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { VecMap } from "../../vec-map/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDisplay(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::display::Display` + "<");
}

export interface DisplayFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  fields: ToField<VecMap<String, String>>;
  version: ToField<"u16">;
}

export type DisplayReified<T0 extends PhantomTypeArgument> = Reified<
  Display<T0>,
  DisplayFields<T0>
>;

/**
 * Move struct: `Display`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Display<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::display::Display`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Display.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::display::Display<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Display.$isPhantom;

  readonly id: ToField<UID>;
  readonly fields: ToField<VecMap<String, String>>;
  readonly version: ToField<"u16">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: DisplayFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      Display.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::display::Display<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.fields = fields.fields;
    this.version = fields.version;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): DisplayReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Display.$typeName,
      fullTypeName: composeSuiType(
        Display.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::display::Display<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: Display.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        Display.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Display.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Display.fromBcs(T0, data),
      bcs: Display.bcs,
      fromJSONField: (field: any) => Display.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Display.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Display.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Display.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Display.fetch(client, T0, id),
      new: (fields: DisplayFields<ToPhantomTypeArgument<T0>>) => {
        return new Display([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Display.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Display<ToPhantomTypeArgument<T0>>>> {
    return phantom(Display.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Display<ToPhantomTypeArgument<T0>> {
    return Display.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      fields: decodeFromFields(
        VecMap.reified(String.reified(), String.reified()),
        fields.fields,
      ),
      version: decodeFromFields("u16", fields.version),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Display<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Display<ToPhantomTypeArgument<T0>> {
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
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Display<ToPhantomTypeArgument<T0>> {
    return Display.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      fields: decodeFromJSONField(
        VecMap.reified(String.reified(), String.reified()),
        field.fields,
      ),
      version: decodeFromJSONField("u16", field.version),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Display<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Display<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDisplay(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Display object`,
      );
    }
    return Display.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Display<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDisplay(data.bcs.type)) {
        throw new Error(`object at is not a Display object`);
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Display<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Display object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDisplay(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Display object`);
    }

    return Display.fromSuiObjectData(typeArg, res.data);
  }
}
