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
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isConfig(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::config::Config` + "<");
}

export interface ConfigFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
}

export type ConfigReified<T0 extends PhantomTypeArgument> = Reified<Config<T0>, ConfigFields<T0>>;

/**
 * Move struct: `Config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Config<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::config::Config`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Config.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::config::Config<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Config.$isPhantom;

  readonly id: ToField<UID>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ConfigFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Config.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::config::Config<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ConfigReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Config.$typeName,
      fullTypeName: composeSuiType(
        Config.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::config::Config<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: Config.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Config.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Config.fromBcs(T0, data),
      bcs: Config.bcs,
      fromJSONField: (field: any) => Config.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Config.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Config.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Config.fetch(client, T0, id),
      new: (fields: ConfigFields<ToPhantomTypeArgument<T0>>) => {
        return new Config([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Config.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Config<ToPhantomTypeArgument<T0>>>> {
    return phantom(Config.reified(T0));
  }
  static get p() {
    return Config.phantom;
  }

  static get bcs() {
    return bcs.struct("Config", {
      id: UID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Config<ToPhantomTypeArgument<T0>> {
    return Config.reified(typeArg).new({ id: decodeFromFields(UID.reified(), fields.id) });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Config<ToPhantomTypeArgument<T0>> {
    if (!isConfig(item.type)) {
      throw new Error("not a Config type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Config.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Config<ToPhantomTypeArgument<T0>> {
    return Config.fromFields(typeArg, Config.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Config<ToPhantomTypeArgument<T0>> {
    return Config.reified(typeArg).new({ id: decodeFromJSONField(UID.reified(), field.id) });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Config<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Config.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Config.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Config.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Config<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isConfig(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Config object`);
    }
    return Config.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Config<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isConfig(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Config object`);
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

      return Config.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Config.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Config<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Config object`);
    }

    return Config.fromSuiObjectData(typeArg, res.data);
  }
}
