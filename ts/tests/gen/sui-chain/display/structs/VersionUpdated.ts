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
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
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

export interface VersionUpdatedFields<T0 extends PhantomTypeArgument> {
  id: ToField<ID>;
  version: ToField<"u16">;
  fields: ToField<VecMap<String, String>>;
}

export type VersionUpdatedReified<T0 extends PhantomTypeArgument> = Reified<
  VersionUpdated<T0>,
  VersionUpdatedFields<T0>
>;

/**
 * Move struct: `VersionUpdated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class VersionUpdated<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::display::VersionUpdated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = VersionUpdated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = VersionUpdated.$isPhantom;

  readonly id: ToField<ID>;
  readonly version: ToField<"u16">;
  readonly fields: ToField<VecMap<String, String>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: VersionUpdatedFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      VersionUpdated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
    this.fields = fields.fields;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): VersionUpdatedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: VersionUpdated.$typeName,
      fullTypeName: composeSuiType(
        VersionUpdated.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::display::VersionUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: VersionUpdated.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        VersionUpdated.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VersionUpdated.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => VersionUpdated.fromBcs(T0, data),
      bcs: VersionUpdated.bcs,
      fromJSONField: (field: any) => VersionUpdated.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        VersionUpdated.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VersionUpdated.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VersionUpdated.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        VersionUpdated.fetch(client, T0, id),
      new: (fields: VersionUpdatedFields<ToPhantomTypeArgument<T0>>) => {
        return new VersionUpdated([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VersionUpdated.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<VersionUpdated<ToPhantomTypeArgument<T0>>>> {
    return phantom(VersionUpdated.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
    return VersionUpdated.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
      version: decodeFromFields("u16", fields.version),
      fields: decodeFromFields(
        VecMap.reified(String.reified(), String.reified()),
        fields.fields,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
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
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
    return VersionUpdated.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
      version: decodeFromJSONField("u16", field.version),
      fields: decodeFromJSONField(
        VecMap.reified(String.reified(), String.reified()),
        field.fields,
      ),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVersionUpdated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VersionUpdated object`,
      );
    }
    return VersionUpdated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): VersionUpdated<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isVersionUpdated(data.bcs.type)
      ) {
        throw new Error(`object at is not a VersionUpdated object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<VersionUpdated<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VersionUpdated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVersionUpdated(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VersionUpdated object`);
    }

    return VersionUpdated.fromSuiObjectData(typeArg, res.data);
  }
}
