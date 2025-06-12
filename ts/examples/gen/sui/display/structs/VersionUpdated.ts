import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
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
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { VecMap } from "../../vec-map/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVersionUpdated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::display::VersionUpdated` + "<");
}

export interface VersionUpdatedFields<T extends PhantomTypeArgument> {
  id: ToField<ID>;
  version: ToField<"u16">;
  fields: ToField<VecMap<String, String>>;
}

export type VersionUpdatedReified<T extends PhantomTypeArgument> = Reified<
  VersionUpdated<T>,
  VersionUpdatedFields<T>
>;

/**
 * Move struct: `VersionUpdated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class VersionUpdated<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::display::VersionUpdated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = VersionUpdated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = VersionUpdated.$isPhantom;

  readonly id: ToField<ID>;
  readonly version: ToField<"u16">;
  readonly fields: ToField<VecMap<String, String>>;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: VersionUpdatedFields<T>) {
    this.$fullTypeName = composeSuiType(
      VersionUpdated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
    this.fields = fields.fields;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): VersionUpdatedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: VersionUpdated.$typeName,
      fullTypeName: composeSuiType(
        VersionUpdated.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: VersionUpdated.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => VersionUpdated.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => VersionUpdated.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => VersionUpdated.fromBcs(T, data),
      bcs: VersionUpdated.bcs,
      fromJSONField: (field: any) => VersionUpdated.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => VersionUpdated.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => VersionUpdated.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => VersionUpdated.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => VersionUpdated.fetch(client, T, id),
      new: (fields: VersionUpdatedFields<ToPhantomTypeArgument<T>>) => {
        return new VersionUpdated([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VersionUpdated.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<VersionUpdated<ToPhantomTypeArgument<T>>>> {
    return phantom(VersionUpdated.reified(T));
  }
  static get p() {
    return VersionUpdated.phantom;
  }

  static get bcs() {
    return bcs.struct("VersionUpdated", {
      id: ID.bcs,
      version: bcs.u16(),
      fields: VecMap.bcs(String.bcs, String.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    return VersionUpdated.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
      version: decodeFromFields("u16", fields.version),
      fields: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.fields),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    if (!isVersionUpdated(item.type)) {
      throw new Error("not a VersionUpdated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return VersionUpdated.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes("u16", item.fields.version),
      fields: decodeFromFieldsWithTypes(
        VecMap.reified(String.reified(), String.reified()),
        item.fields.fields,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    return VersionUpdated.fromFields(typeArg, VersionUpdated.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version,
      fields: this.fields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    return VersionUpdated.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
      version: decodeFromJSONField("u16", field.version),
      fields: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.fields),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== VersionUpdated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(VersionUpdated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return VersionUpdated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVersionUpdated(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a VersionUpdated object`);
    }
    return VersionUpdated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): VersionUpdated<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isVersionUpdated(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a VersionUpdated object`);
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

      return VersionUpdated.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VersionUpdated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<VersionUpdated<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching VersionUpdated object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isVersionUpdated(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a VersionUpdated object`);
    }

    return VersionUpdated.fromSuiObjectData(typeArg, res.data);
  }
}
